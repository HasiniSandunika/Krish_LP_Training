package com.hasini.rentcloud.rentservice.service;

import com.hasini.rentcloud.commons.model.customer.Customer;
import com.hasini.rentcloud.commons.model.rent.Rent;
import com.hasini.rentcloud.commons.model.vehicle.Vehicle;
import com.hasini.rentcloud.rentservice.model.DetailResponse;
import com.hasini.rentcloud.rentservice.repository.RentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.List;
import java.util.Optional;

@Service
public class RentServiceImpl implements RentService{
    @Autowired
    RentRepository rentRepository;
    @Autowired
    RestTemplate restTemplate;
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
    public DetailResponse findDetailResponse(int id) {
        Rent rent=findById(id);
        Customer customer=restTemplate.getForObject("http://localhost:8181/services/customers/"
                +rent.getCustomerId(), Customer.class);
        Vehicle vehicle=restTemplate.getForObject("http://localhost:8383/services/vehicles/"
                +rent.getVehicleId(), Vehicle.class);
        return new DetailResponse(rent, customer, vehicle);
    }

    @Bean
    RestTemplate getRestTemplate(RestTemplateBuilder restTemplateBuilder){
        return restTemplateBuilder.build();
    }
}
