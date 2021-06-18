package com.hasini.rentcloud.customerservice.controller;

import com.hasini.rentcloud.commons.model.customer.Customer;
import com.hasini.rentcloud.customerservice.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "/services/customers")
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @PostMapping(value = "")
    public Customer save(@RequestBody Customer customer){
        return customerService.save(customer);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Customer getById(@PathVariable int id) {
        Customer customer =  customerService.getById(id);
        return customer;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    @ResponseBody
    public List<Customer> findAll() {
        List<Customer> customers=customerService.findAll();
        return customers;
    }

}
