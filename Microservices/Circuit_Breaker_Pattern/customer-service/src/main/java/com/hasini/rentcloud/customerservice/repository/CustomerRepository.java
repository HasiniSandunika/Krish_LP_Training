package com.hasini.rentcloud.customerservice.repository;

import com.hasini.rentcloud.commons.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}
