package com.hasini.rentcloud.rentservice.service;

import com.hasini.rentcloud.commons.model.customer.Customer;
import com.hasini.rentcloud.commons.model.rent.Rent;
import com.hasini.rentcloud.commons.model.vehicle.Vehicle;
import com.hasini.rentcloud.rentservice.hystrix.CommonHystrixCommand;
import com.hasini.rentcloud.rentservice.hystrix.VehicleCommand;
import com.hasini.rentcloud.rentservice.model.DetailResponse;
import com.hasini.rentcloud.rentservice.repository.RentRepository;
import com.netflix.hystrix.HystrixCommand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

@Service
public class RentServiceImpl implements RentService{
    @Autowired
    RentRepository rentRepository;
    @Autowired
    RestTemplate restTemplate;
    @Autowired
    HystrixCommand.Setter setter;
    @Override
    public Rent save(Rent rent) {
        return rentRepository.save(rent);
    }

    @Override
    public Rent findById(int id) {
        Optional<Rent> rent = rentRepository.findById(id);
        if (rent.isPresent())
            return rent.get();
        else
            return new Rent();
    }

    @Override
    public List<Rent> findAll() {
        return rentRepository.findAll();
    }

    @Override
    public DetailResponse findDetailResponse(int id) throws ExecutionException, InterruptedException {
        Rent rent=findById(id);
        Customer customer=getCustomer(rent.getCustomerId());
        Vehicle vehicle=getVehicle(rent.getVehicleId());
        System.out.println(LocalDateTime.now()+"**********"+"Rent");
        return new DetailResponse(rent, customer, vehicle);
    }

    public DetailResponse findDetailResponseFallBack(int id){
        return new DetailResponse(new Rent(), new Customer(), new Vehicle());
    }
    private Customer getCustomer(int customerId) throws ExecutionException, InterruptedException {
        CommonHystrixCommand<Customer> customerCommonHystrixCommand =
                new CommonHystrixCommand<Customer>(setter,()-> {
                    return restTemplate.getForObject("http://customer/services/customers/" + customerId,Customer.class);
                },()->{
                    return new Customer();
                });
        Future<Customer> customerFuture=customerCommonHystrixCommand.queue();
        return customerFuture.get();
    }

    private Vehicle getVehicle(int vehicleId){
        VehicleCommand vehicleCommand= new VehicleCommand(restTemplate,vehicleId);
        return vehicleCommand.execute();
    }

    @LoadBalanced
    @Bean
    RestTemplate getRestTemplate(RestTemplateBuilder restTemplateBuilder){
        return restTemplateBuilder.build();
    }
}
