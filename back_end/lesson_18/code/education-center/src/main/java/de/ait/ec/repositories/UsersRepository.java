package de.ait.ec.repositories;

import de.ait.ec.models.Course;
import de.ait.ec.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UsersRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);

    Set<User> findAllByCoursesContainsOrderById(Course course);

    Optional<User> findByEmail(String email);

}
