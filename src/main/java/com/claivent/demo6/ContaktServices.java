package com.claivent.demo6;

import com.claivent.demo6.model.Contakt;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ContaktServices {

    public List<Contakt> getContakts() {
        return List.of(
            new Contakt("Jan Novák",   "jan@example.com", "123456789"),
            new Contakt("Petra Malá",  "petra@example.com", "987654321"),
            new Contakt("Tomáš Vlček", "tomas@example.com", "555555555")
        );
    }
}
