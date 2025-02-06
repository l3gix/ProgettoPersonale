package com.example.progettobackend.Controller;


import com.example.progettobackend.Model.Operation;
import com.example.progettobackend.Service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/op")
@CrossOrigin
public class OperationController
{
    private OperationService operationService;
    @Autowired
    public OperationController(OperationService operationService){this.operationService = operationService;}

    @GetMapping("/operation")
    public ResponseEntity<?> operation (@RequestParam int id)
    {
        try
        {
            List<Operation> result = operationService.operation(id);
            return ResponseEntity.ok(result);
        } catch(IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/newoperation")
    public ResponseEntity<?> newOperation (@RequestBody Operation operation)
    {
        try
        {
            Operation resul = operationService.newOperation(operation);
            return ResponseEntity.ok(resul);
        }catch(IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
