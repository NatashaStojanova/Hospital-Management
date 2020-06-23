package mk.ukim.finki.natashastojanova.hospital_management.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "patient")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String surname;
    private String address;
    private int age;

    @ManyToOne
    @JoinColumn(name = "id_doctor")
    @JsonIgnore
    private GeneralPractitioner gp;

    @OneToMany(mappedBy = "patient")
    @JsonIgnore
    private List<CheckUp> checkUpList;

}
