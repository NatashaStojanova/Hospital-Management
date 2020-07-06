--Create CheckUp ( The procedure is invoked by the doctor's SSN, patient SSN and description for the check up).
--Изврши преглед (Процедурата се повикува со SSN на лекарот, SSN на пациентот и опис за самиот преглед).
CREATE OR REPLACE FUNCTION checkUpFunction(BIGINT,BIGINT,VARCHAR)
RETURNS INTEGER AS $$
    DECLARE result varchar;
            doctor_id int;
            patient_id int;
BEGIN
    IF $1 IN (SELECT ssn FROM doctor) AND $2 IN (SELECT ssn FROM patient)
    THEN
            select distinct id into doctor_id from doctor where ssn = $1;
            select id into patient_id from patient where ssn = $2;
            insert into check_up VALUES(nextval('main_sequence'),$3,current_date,patient_id,null,doctor_id)
           returning id into result;


    END IF;
     return result;
END;
$$ LANGUAGE plpgsql;

SELECT checkUpFunction(94,353065,'create check up function');


