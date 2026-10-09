CREATE TABLE photography_bookings (
        id INT PRIMARY KEY AUTO_INCREMENT,
            client_name VARCHAR(100) NOT NULL,
                shoot_type VARCHAR(50),
                    booking_date DATE
                    );

                    INSERT INTO photography_bookings (client_name, shoot_type, booking_date) 
                    VALUES ('Abhi Kumar', 'Wedding Portrait', '2026-11-20');
                    
)