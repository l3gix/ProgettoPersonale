package com.example.progettobackend.Service;

import com.example.progettobackend.Model.User;
import com.example.progettobackend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService
{
    @Autowired
    private UserRepository userRepository;

    public User register(User user)
    {
        if(user == null)
        {
            throw new IllegalArgumentException("User cannot be null");
        }
        if(userRepository.findByUsername(user.getUsername())!= null)
        {
            throw new IllegalArgumentException("Username already exists");
        }

        return userRepository.save(user);
    }

    public User login(User user)
    {
        if(user == null)
        {
            throw new IllegalArgumentException("Username and password cannot be null");
        }

        User userFound = userRepository.findByUsername(user.getUsername());

        if(userFound != null)
        {
            if(userFound.getPassword().equals(user.getPassword())) return userFound;
            else throw new IllegalArgumentException("Password non coretta");
        }else
        {
            throw new IllegalArgumentException("Username not found");
        }


    }
}
