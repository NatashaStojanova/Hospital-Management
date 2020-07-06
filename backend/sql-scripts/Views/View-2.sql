--За секоја болница да се каже кој ICD-10 код бил најчесто дијагностициран
--од страна на докторите за 2019 година.
-------------------------------------------------------------------------------------------------------
CREATE VIEW CodeByHospitalView AS
SELECT bh.name as hospital_name,i.code as code,COUNT(*) AS total
FROM base_hospital bh JOIN hospital h on bh.id = h.id_base_hospital
     JOIN doctor d on h.id = d.hospital_id
     JOIN check_up cu on d.id = cu.doctor_id
     JOIN check_up_icd cui on cu.id = cui.check_up_id
     JOIN icd_10 i on cui.icd_id = i.id
WHERE cu.date >= '2019-01-01' AND cu.date <= '2019-12-31'
GROUP BY bh.name,i.code;

-------------------------------------------------------------------------------------------------------
CREATE VIEW findMaxCodeView AS
SELECT hospital_name,MAX(total) AS total_code
FROM CodeByHospitalView
GROUP BY hospital_name;

---------------------------------------------------------------------------------------------------------
SELECT ch.hospital_name AS hospital_name,ch.code as code
FROM CodeByHospitalView ch join findMaxCodeView m on ch.hospital_name = m.hospital_name AND ch.total = m.total_code
ORDER BY ch.hospital_name

