package com.claivent.demo6;

import com.claivent.demo6.model.Contakt;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class ContaktControler {
    private final ContaktServices contaktServices;

    public ContaktControler(ContaktServices contaktServices) {this.contaktServices = contaktServices;}


    @GetMapping("/contakt")
    public String contakts(Model model) {
        model.addAttribute("contakts", contaktServices.getContakts());
        return "contakts";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/contakts")
    @ResponseBody
    public List<Contakt> usersApi(){
        return contaktServices.getContakts();
    }


}