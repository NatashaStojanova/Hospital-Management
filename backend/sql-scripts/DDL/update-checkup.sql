--EXECUTE THIS AFTER YOU INSERT ROWS IN REFERRAL TABLE
do
$do$
declare
     i int;
begin
for  i in 1..10000
loop
   UPDATE check_up
SET referral_id = floor(random()*(1050101-1040102+1))+1040102
WHERE id = i + 1020102 - 1;
end loop;
end
$do$;

do
$do$
declare
     i int;
begin
for  i in 1..10000
loop
   UPDATE check_up
SET patient_id = floor(random()*(1050101-1040102+1))+1040102
WHERE id = i + 1020102 - 1;
end loop;
end
$do$;

select i.code
from patient join check_up cu on patient.id = cu.patient_id join check_up_icd cui on cu.id = cui.check_up_id join icd_10 i on cui.icd_id = i.id
where patient_id = 219382;

select *
from doctor
where id = 69;

insert into doctor(id,ssn,name,surname,hospital_id) values (56,4865765,'koko','d',11)
returning *;

select *
from hospital join base_hospital bh on hospital.id_base_hospital = bh.id
where id_base_hospital = 6;

--EXECUTE THIS AFTER YOU INSERT ROWS IN REFERRAL TABLE
do
$do$
declare
     i int;
begin

   UPDATE patient
SET age =  floor(random()*(100-30+1))+30
WHERE age = 0 OR age = 1;

end
$do$;




