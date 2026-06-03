package com.claivent.demo67.repository;

import com.claivent.demo67.model.DbUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DbUserRepository extends JpaRepository<DbUser, Long> {}
