package mk.ukim.finki.natashastojanova.hospital_management.service;


import mk.ukim.finki.natashastojanova.hospital_management.dto.Hospital_Location_Dto;
import mk.ukim.finki.natashastojanova.hospital_management.model.BaseHospital;
import mk.ukim.finki.natashastojanova.hospital_management.model.Hospital;

import java.util.Collection;
import java.util.List;

/**
 * @author Natasha Stojanova
 */
public interface BaseHospitalService {

    public List<BaseHospital> findAllBaseHospitals();

    public List<Hospital> findAllHospitals(Long id);

    public BaseHospital addNewBaseHospital(String name, String description);

    public Integer addNewHospital(String location, Long id);

    public Collection<Hospital_Location_Dto> groupByLocation();
}
