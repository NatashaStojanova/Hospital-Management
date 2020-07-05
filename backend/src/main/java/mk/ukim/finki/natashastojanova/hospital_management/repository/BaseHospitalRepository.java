package mk.ukim.finki.natashastojanova.hospital_management.repository;

import mk.ukim.finki.natashastojanova.hospital_management.dto.Hospital_Location_Dto;
import mk.ukim.finki.natashastojanova.hospital_management.model.BaseHospital;
import mk.ukim.finki.natashastojanova.hospital_management.model.Hospital;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Repository
public interface BaseHospitalRepository extends JpaSpecificationRepository<BaseHospital> {

    @Query("SELECT b FROM BaseHospital b")
    public List<BaseHospital> findAllBaseHospitals();

    @Query(value = "SELECT h FROM BaseHospital bh JOIN Hospital h  ON bh.id= h.baseHospital.id WHERE bh.id = :id")
    public List<Hospital> findAllHospitals(@Param("id") Long id);

    @Query(value = "INSERT INTO base_hospital (id,name,description) VALUES ((SELECT nextval('main_sequence') AS id),:name,:description) RETURNING *", nativeQuery = true)
    public BaseHospital addNewBaseHospital(@Param("name") String name, @Param("description") String description);

    @Query(value = "INSERT INTO Hospital (id,location,id_base_hospital) VALUES ((SELECT nextval('main_sequence') AS id) ,:location,:id) RETURNING *", nativeQuery = true)
    public Integer addNewHospital(@Param("location") String location, @Param("id") Long id);

    @Query(value = " SELECT bh.name AS name, count(h.location) AS total FROM BaseHospital bh JOIN Hospital h ON bh.id = h.baseHospital.id GROUP BY bh.name")
    public Collection<Hospital_Location_Dto> groupByLocation();
}
