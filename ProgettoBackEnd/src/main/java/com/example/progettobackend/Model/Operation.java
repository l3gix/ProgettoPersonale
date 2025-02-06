package com.example.progettobackend.Model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="operazione")
public class Operation
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idoperazione;

    private String data;
    private double importo;
    private int id;

}
