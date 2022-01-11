CREATE DATABASE DEMO

CREATE TABLE STUDENT(
	enroll int,
	name varchar(50),
	dept varchar(10),
	age int,
	spi decimal(4,2),
)

insert into student
values
(1, 'stu1', 'ce', 20, 6.7)

insert into student
values
(2, 'stu2', 'me', 21, 8.7)

insert into student
values
(3, 'stu3', 'ee', 19, 9.6)

insert into student
values
(4, 'stu4', 'ce', 20, 9.0)

insert into student
values
(5, 'stu5', 'me', 21, 6.9)

select * from student

select * from student 
where name like '%3'

select * from student
where age > 20

select dept, count(enroll) from student
group by dept

select distinct dept from student

alter table student add salary int

insert into student(salary)
values (20000)

delete from student
where salary = 20000

select * from student 
where age = 20 and dept = 'ce'

select * from student as S

truncate table student

drop table student

drop database demo

