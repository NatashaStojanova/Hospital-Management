package mk.ukim.finki.natashastojanova.hospital_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.NoRepositoryBean;

/**
 * @author Natasha Stojanova
 */
@NoRepositoryBean
public interface JpaSpecificationRepository<T> extends JpaRepository<T, Long>, JpaSpecificationExecutor<T> {
}