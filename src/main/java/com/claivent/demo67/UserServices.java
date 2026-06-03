package com.claivent.demo67;

import com.claivent.demo67.model.User;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class UserServices {

  public List<User> getUsers() {
    return List.of(
        new User(1L, "Jan Novák",   "jan@example.com"),
        new User(2L, "Petra Malá",  "petra@example.com"),
        new User(3L, "Tomáš Vlček", "tomas@example.com")
    );
  }
}
