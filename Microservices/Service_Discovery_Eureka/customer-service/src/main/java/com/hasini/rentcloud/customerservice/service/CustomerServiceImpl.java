package com.hasini.rentcloud.customerservice.service;

import com.hasini.rentcloud.commons.model.customer.Customer;
import com.hasini.rentcloud.customerservice.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
@Service
public class CustomerServiceImpl implements CustomerService{
    @Autowired
    CustomerRepository customerRepository;
    @Override
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer getById(int id ) {
        Optional<Customer> customer =  customerRepository.findById(id);
        if (customer.isPresent())
            return customer.get();
        else
            return new Customer();
    }

    public List<Customer> findAll(){
        List<Customer> customers =  customerRepository.findAll();
        return customers;
    }
}
