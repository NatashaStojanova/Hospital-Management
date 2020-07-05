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
public class GP_Dto {
    int ssn;
    String name;
    String surname;
    int hospital_id;
}
