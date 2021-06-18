package com.hasini.rentcloud.rentservice.repository;

import com.hasini.rentcloud.commons.model.rent.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentRepository extends JpaRepository<Rent, Integer> {
}
