package mk.ukim.finki.natashastojanova.hospital_management.repository;

import mk.ukim.finki.natashastojanova.hospital_management.model.Doctor;
import mk.ukim.finki.natashastojanova.hospital_management.model.Patient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Repository
public interface DoctorRepository extends JpaSpecificationRepository<Doctor> {
    @Query("SELECT d FROM Doctor d")
    public List<Doctor> findAllDoctors();

    @Query("SELECT d FROM Doctor d JOIN Hospital h ON d.hospital.id = h.id JOIN BaseHospital bh ON h.baseHospital.id = bh.id WHERE bh.name = ?1")
    public List<Doctor> findAllDoctorsByHospital(String hospitalName);

    @Query("SELECT p FROM GeneralPractitioner gp JOIN Patient  p ON gp.id = p.gp.id WHERE gp.id = :id")
    public List<Patient> findAllDoctorPatients(@Param("id") Long id);
}
