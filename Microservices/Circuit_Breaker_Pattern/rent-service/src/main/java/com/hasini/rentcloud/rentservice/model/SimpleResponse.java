package com.hasini.rentcloud.rentservice.model;

import com.hasini.rentcloud.commons.model.rent.Rent;

public class SimpleResponse implements Response{
    private Rent rent;

    public SimpleResponse(Rent rent) {
        this.rent = rent;
    }

    public void setRent(Rent rent) {
        this.rent = rent;
    }

    public Rent getRent() {
        return rent;
    }
}
