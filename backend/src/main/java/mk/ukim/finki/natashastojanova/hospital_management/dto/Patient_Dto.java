package mk.ukim.finki.natashastojanova.hospital_management.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Natasha Stojanova
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Patient_Dto {
    int ssn;
    String name;
    String surname;
    String address;
    int age;
    int id_doctor;
}
