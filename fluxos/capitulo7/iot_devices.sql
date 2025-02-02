-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 31/01/2025 às 16:24
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `iot_devices`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_devices`
--

CREATE TABLE `tb_devices` (
  `dev_id` int(11) NOT NULL,
  `dev_mac` char(17) NOT NULL,
  `dev_name` varchar(30) NOT NULL,
  `dev_comment` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Dispositivos conectáveis à plataforma.';

--
-- Despejando dados para a tabela `tb_devices`
--

INSERT INTO `tb_devices` (`dev_id`, `dev_mac`, `dev_name`, `dev_comment`) VALUES
(1, '08:F9:E0:BA:3D:DC', 'ESP32_1', 'NodeMCU ESP32 38pin'),
(2, '7C:9E:BD:ED:49:84', 'ESP32_2', 'NodeMCU ESP32 38pin'),
(3, 'D8:BC:38:E5:03:98', 'ESP32_3', 'NodeMCU ESP32 38pin'),
(4, 'CC:50:E3:16:1B:4C', 'ESP8266_1', 'Dispositivo NodeMCU ESP8266EX');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tb_devices`
--
ALTER TABLE `tb_devices`
  ADD PRIMARY KEY (`dev_id`),
  ADD UNIQUE KEY `mac_idx` (`dev_mac`) USING BTREE;

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_devices`
--
ALTER TABLE `tb_devices`
  MODIFY `dev_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
