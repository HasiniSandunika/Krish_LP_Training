package com.hasini.rentcloud.profileservice.service;

import com.hasini.rentcloud.commons.model.customer.Customer;

import java.util.List;

public interface CustomerService {
    Customer save(Customer customer);
    Customer getById(int id);
    List<Customer> findAll();

}
