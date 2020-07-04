package mk.ukim.finki.natashastojanova.hospital_management.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

/**
 * @author Natasha Stojanova
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CheckUpDto {
    String description;
    Date date;
    Long doctorSSN;
    Long patientSSN;


}
