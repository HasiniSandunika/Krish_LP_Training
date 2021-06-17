package com.hasini.rentcloud.profileservice.controller;

import com.hasini.rentcloud.commons.model.Customer;
import com.hasini.rentcloud.profileservice.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "/services/customers")
public class ProfileController {

    @Autowired
    CustomerService customerService;

    @PostMapping(value = "")
    @PreAuthorize("hasAuthority('create_profile')")
    public Customer save(@RequestBody Customer customer){
        return customerService.save(customer);
    }

    @PreAuthorize("hasAuthority('read_profile')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Customer getById(@PathVariable int id) {
        Customer customer =  customerService.getById(id);
        return customer;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('read_profile')")
    @ResponseBody
    public List<Customer> findAll() {
        List<Customer> customers=customerService.findAll();
        return customers;
    }
}
