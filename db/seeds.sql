INSERT INTO department (department_name)
VALUES
('Ghost'),
('Fairy'),
('Fighting'),
('Dragon'),
('Grass');

INSERT INTO roles (title, salary, department_id)
VALUES
('Ghost Manager', 250000, '1'),
('Fairy Manager', 150000, '2'),
('Fighting Manager', 150000, '3'),
('Dragon Manager',1500000, '4'),
('Grass Manager', 150000, '5');

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES
('Misdreavus', 'Mismagius', '1', '1'),
('Kirlia', 'Gardevoir', '2', '2'),n
('Machop', 'Machamp', '3', '3'),
('Dragonair', 'Dragonite', '4', '4'),
('Eevee', 'Leafeon', '5', '5');