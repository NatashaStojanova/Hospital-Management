package mk.ukim.finki.natashastojanova.hospital_management.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "icd_10")
public class ICD {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private int code;
    private String name;

    @OneToMany(mappedBy = "icd")
    private List<CheckUp_ICD> checkUp_icdList;
}
