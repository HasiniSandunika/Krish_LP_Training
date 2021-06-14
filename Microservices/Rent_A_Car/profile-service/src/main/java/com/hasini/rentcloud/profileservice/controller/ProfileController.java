package com.hasini.rentcloud.profileservice.controller;

import com.hasini.rentcloud.commons.model.Customer;
import com.hasini.rentcloud.profileservice.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "/services")
public class ProfileController {

    @Autowired
    CustomerService customerService;

    @PostMapping(value = "/profile")
        public Customer save(@RequestBody Customer customer){
        return customerService.save(customer);
    }

    @RequestMapping(value = "/profile/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Customer getById(@PathVariable int id) {
        Customer customer =  customerService.getById(id);
        return customer;
    }

    @RequestMapping(value = "/profile/all", method = RequestMethod.GET)
    @ResponseBody
    public List<Customer> findAll() {
        List<Customer> customers=customerService.findAll();
        return customers;
    }
}
