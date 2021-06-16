package com.hasini.cloud.oauth.prod.oauthprod.service;

import com.hasini.cloud.oauth.prod.oauthprod.model.AuthUserDetail;
import com.hasini.cloud.oauth.prod.oauthprod.model.User;
import com.hasini.cloud.oauth.prod.oauthprod.repository.UserDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AccountStatusUserDetailsChecker;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service("userDetailsService")
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private UserDetailRepository userDetailRepository;

    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        Optional<User> optionalUser=userDetailRepository.findByUsername(name);
        optionalUser.orElseThrow(()->new UsernameNotFoundException("Username or Password Invalid"));
        UserDetails userDetails=new AuthUserDetail(optionalUser.get());
        new AccountStatusUserDetailsChecker().check(userDetails);
        return userDetails;
    }

}
