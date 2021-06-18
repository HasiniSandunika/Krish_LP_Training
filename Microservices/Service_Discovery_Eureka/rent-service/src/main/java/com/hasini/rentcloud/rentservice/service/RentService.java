package com.hasini.rentcloud.rentservice.service;

import com.hasini.rentcloud.commons.model.rent.Rent;
import com.hasini.rentcloud.rentservice.model.DetailResponse;
import com.hasini.rentcloud.rentservice.model.Response;

import java.util.List;

public interface RentService {
    Rent save(Rent customer);
    Rent findById(int id);
    List<Rent> findAll();
    DetailResponse findDetailResponse(int id);
}
