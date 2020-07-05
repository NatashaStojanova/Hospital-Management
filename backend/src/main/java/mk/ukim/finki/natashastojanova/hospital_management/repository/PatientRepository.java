package mk.ukim.finki.natashastojanova.hospital_management.repository;

import mk.ukim.finki.natashastojanova.hospital_management.model.Patient;
import org.springframework.stereotype.Repository;

/**
 * @author Natasha Stojanova
 */
@Repository
public interface PatientRepository extends JpaSpecificationRepository<Patient> {
}
