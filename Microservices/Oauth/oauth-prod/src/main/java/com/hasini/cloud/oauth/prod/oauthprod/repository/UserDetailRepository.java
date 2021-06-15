package com.hasini.cloud.oauth.prod.oauthprod.repository;

import com.hasini.cloud.oauth.prod.oauthprod.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDetailRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String name);
}
