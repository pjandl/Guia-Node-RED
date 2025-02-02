CREATE TABLE `tb_data` (
 `dat_id` int(11) NOT NULL AUTO_INCREMENT,
 `dat_dev_id` int(11) NOT NULL,
 `dat_dev_date` datetime NOT NULL,
 `dat_type` tinyint(3) unsigned NOT NULL,
 `dat_value` float NOT NULL,
 PRIMARY KEY (`dat_id`),
 KEY `dat_dev_id` (`dat_dev_id`),
 CONSTRAINT `tb_data_ibfk_1` FOREIGN KEY (`dat_dev_id`) REFERENCES `tb_devices` (`dev_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci