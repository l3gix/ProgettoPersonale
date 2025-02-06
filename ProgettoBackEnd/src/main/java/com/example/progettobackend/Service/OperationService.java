package com.example.progettobackend.Service;

import com.example.progettobackend.Model.Operation;
import com.example.progettobackend.Model.User;
import com.example.progettobackend.Repository.OperationRepository;
import com.example.progettobackend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OperationService {

    @Autowired
    private OperationRepository operationRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Operation> operation(int id) {
        List<Operation> operations = operationRepository.findOperationById(id);
        return operations;
    }

    public Operation newOperation(Operation operation)
    {
        Operation newoperation = operationRepository.save(operation);
        Optional<User> user = userRepository.findById(newoperation.getId());
        User updatedUser = user.get();
        updatedUser.setCredito(updatedUser.getCredito() + newoperation.getImporto());
        userRepository.save(updatedUser);
        return newoperation;
    }

}
