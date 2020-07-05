package mk.ukim.finki.natashastojanova.hospital_management.repository;

import mk.ukim.finki.natashastojanova.hospital_management.model.ICD;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Repository
public interface ICDRepository extends JpaSpecificationRepository<ICD> {
    @Query("SELECT i FROM ICD i")
    public List<ICD> getAllICDCodes();

    ICD findByCode(Long code);
}
