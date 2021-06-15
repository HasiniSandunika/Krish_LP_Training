package com.hasini.rentcloud.profileservice.service;

import com.hasini.rentcloud.commons.model.Customer;
import com.hasini.rentcloud.profileservice.repository.CustomerRepository;
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
        Customer customer1 = customer.get();
        return customer1;
    }

    public List<Customer> findAll(){
        List<Customer> customers =  customerRepository.findAll();
        return customers;
    }
}
