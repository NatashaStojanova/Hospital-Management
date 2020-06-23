package mk.ukim.finki.natashastojanova.hospital_management.repository;

import mk.ukim.finki.natashastojanova.hospital_management.model.Hospital;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Repository
public interface BaseHospitalRepository {
    @Query(value = "SELECT b FROM BaseHospital b")
    public List<Hospital> findAllHospitals();
}
