package mk.ukim.finki.natashastojanova.hospital_management.service;


import mk.ukim.finki.natashastojanova.hospital_management.model.ICD;

import java.util.List;

/**
 * @author Natasha Stojanova
 */
public interface ICDService {
    ICD findByCode(Long code);

    public List<ICD> getAllICDCodes();
}
