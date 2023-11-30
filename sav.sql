-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: sav
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.23.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (4,'COMDATA','Ivandry'),(5,'OTI','Tamatave'),(6,'FLOREAL','Andraharo'),(7,'ISCAM','Ankadifotsy');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intervention`
--

DROP TABLE IF EXISTS `intervention`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intervention` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `location_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `comment` text,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `location_id` (`location_id`),
  CONSTRAINT `intervention_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intervention`
--

LOCK TABLES `intervention` WRITE;
/*!40000 ALTER TABLE `intervention` DISABLE KEYS */;
INSERT INTO `intervention` VALUES (2,'2023-10-24',3,'diagnostique','diagnostique','Pièces à remplacer','OK'),(4,'2023-10-24',3,'diagnostique','diagnostique','Pièces à remplacer','A Suivre');
/*!40000 ALTER TABLE `intervention` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `intervention_location_vw`
--

DROP TABLE IF EXISTS `intervention_location_vw`;
/*!50001 DROP VIEW IF EXISTS `intervention_location_vw`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `intervention_location_vw` AS SELECT 
 1 AS `id`,
 1 AS `date`,
 1 AS `locationID`,
 1 AS `customer`,
 1 AS `location`,
 1 AS `serialNumber`,
 1 AS `name`,
 1 AS `contract`,
 1 AS `counterBlack`,
 1 AS `counterColor`,
 1 AS `description`,
 1 AS `comment`,
 1 AS `status`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `intervention_parts_replaced`
--

DROP TABLE IF EXISTS `intervention_parts_replaced`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intervention_parts_replaced` (
  `intervention_id` int NOT NULL,
  `part_id` int NOT NULL,
  PRIMARY KEY (`intervention_id`,`part_id`),
  KEY `part_id` (`part_id`),
  CONSTRAINT `intervention_parts_replaced_ibfk_1` FOREIGN KEY (`intervention_id`) REFERENCES `intervention` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `intervention_parts_replaced_ibfk_2` FOREIGN KEY (`part_id`) REFERENCES `part` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intervention_parts_replaced`
--

LOCK TABLES `intervention_parts_replaced` WRITE;
/*!40000 ALTER TABLE `intervention_parts_replaced` DISABLE KEYS */;
/*!40000 ALTER TABLE `intervention_parts_replaced` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intervention_parts_to_replace`
--

DROP TABLE IF EXISTS `intervention_parts_to_replace`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intervention_parts_to_replace` (
  `intervention_id` int NOT NULL,
  `part_id` int NOT NULL,
  PRIMARY KEY (`intervention_id`,`part_id`),
  KEY `part_id` (`part_id`),
  CONSTRAINT `intervention_parts_to_replace_ibfk_1` FOREIGN KEY (`intervention_id`) REFERENCES `intervention` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `intervention_parts_to_replace_ibfk_2` FOREIGN KEY (`part_id`) REFERENCES `part` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intervention_parts_to_replace`
--

LOCK TABLES `intervention_parts_to_replace` WRITE;
/*!40000 ALTER TABLE `intervention_parts_to_replace` DISABLE KEYS */;
/*!40000 ALTER TABLE `intervention_parts_to_replace` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intervention_technician`
--

DROP TABLE IF EXISTS `intervention_technician`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intervention_technician` (
  `intervention_id` int NOT NULL,
  `technician_id` int NOT NULL,
  PRIMARY KEY (`intervention_id`,`technician_id`),
  KEY `technician_id` (`technician_id`),
  CONSTRAINT `intervention_technician_ibfk_1` FOREIGN KEY (`intervention_id`) REFERENCES `intervention` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `intervention_technician_ibfk_2` FOREIGN KEY (`technician_id`) REFERENCES `technician` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intervention_technician`
--

LOCK TABLES `intervention_technician` WRITE;
/*!40000 ALTER TABLE `intervention_technician` DISABLE KEYS */;
/*!40000 ALTER TABLE `intervention_technician` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location_name` varchar(255) DEFAULT NULL,
  `customer_id` int NOT NULL,
  `machine_id` int NOT NULL,
  `serial_number` varchar(255) DEFAULT NULL,
  `counter_BW` int DEFAULT NULL,
  `contract` varchar(50) NOT NULL,
  `counter_C` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  KEY `machine_id` (`machine_id`),
  CONSTRAINT `location_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `location_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `location_ibfk_3` FOREIGN KEY (`machine_id`) REFERENCES `machine` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (3,'Service Général',4,6,'12345678900',135669,'Location',15304),(6,'Recrutement',4,6,'78945612300',48332,'Location',12745),(7,'Planning',6,15,'7539146082',0,'Location',0),(8,'Acceuil',7,16,'3692581470',0,'Location',0);
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `location_with_customer_machine_vw`
--

DROP TABLE IF EXISTS `location_with_customer_machine_vw`;
/*!50001 DROP VIEW IF EXISTS `location_with_customer_machine_vw`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `location_with_customer_machine_vw` AS SELECT 
 1 AS `id`,
 1 AS `customer`,
 1 AS `address`,
 1 AS `machineName`,
 1 AS `machineModel`,
 1 AS `location`,
 1 AS `serialNumber`,
 1 AS `counterBlack`,
 1 AS `counterColor`,
 1 AS `contract`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `location_with_customer_vw`
--

DROP TABLE IF EXISTS `location_with_customer_vw`;
/*!50001 DROP VIEW IF EXISTS `location_with_customer_vw`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `location_with_customer_vw` AS SELECT 
 1 AS `id`,
 1 AS `customer`,
 1 AS `address`,
 1 AS `machine_id`,
 1 AS `location`,
 1 AS `serial_number`,
 1 AS `counterBlack`,
 1 AS `counterColor`,
 1 AS `contract`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `machine`
--

DROP TABLE IF EXISTS `machine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `machine` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `color` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `machine`
--

LOCK TABLES `machine` WRITE;
/*!40000 ALTER TABLE `machine` DISABLE KEYS */;
INSERT INTO `machine` VALUES (6,'Multifonction','SHARP','DX-2000',1),(14,'Multifonction','Sharp','BP-10C20',1),(15,'Multifonction','Sharp','MX-M264',0),(16,'Multifonction','Sharp','BP-20M22',0);
/*!40000 ALTER TABLE `machine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `part`
--

DROP TABLE IF EXISTS `part`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `part` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `reference` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `part`
--

LOCK TABLES `part` WRITE;
/*!40000 ALTER TABLE `part` DISABLE KEYS */;
INSERT INTO `part` VALUES (3,'Developpeur','MX-312-FV'),(5,'Tambour','MX-312-FR'),(6,'Raclette','ULCEZ001QSZZ');
/*!40000 ALTER TABLE `part` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technician`
--

DROP TABLE IF EXISTS `technician`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technician` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technician`
--

LOCK TABLES `technician` WRITE;
/*!40000 ALTER TABLE `technician` DISABLE KEYS */;
INSERT INTO `technician` VALUES (2,'Rajo'),(6,'Tafita'),(7,'Lanto');
/*!40000 ALTER TABLE `technician` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `intervention_location_vw`
--

/*!50001 DROP VIEW IF EXISTS `intervention_location_vw`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `intervention_location_vw` AS select `intervention`.`id` AS `id`,`intervention`.`date` AS `date`,`location_with_customer_machine_vw`.`id` AS `locationID`,`location_with_customer_machine_vw`.`customer` AS `customer`,`location_with_customer_machine_vw`.`location` AS `location`,`location_with_customer_machine_vw`.`serialNumber` AS `serialNumber`,`intervention`.`name` AS `name`,`location_with_customer_machine_vw`.`contract` AS `contract`,`location_with_customer_machine_vw`.`counterBlack` AS `counterBlack`,`location_with_customer_machine_vw`.`counterColor` AS `counterColor`,`intervention`.`description` AS `description`,`intervention`.`comment` AS `comment`,`intervention`.`status` AS `status` from (`intervention` join `location_with_customer_machine_vw` on((`intervention`.`location_id` = `location_with_customer_machine_vw`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `location_with_customer_machine_vw`
--

/*!50001 DROP VIEW IF EXISTS `location_with_customer_machine_vw`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `location_with_customer_machine_vw` AS select `location_with_customer_vw`.`id` AS `id`,`location_with_customer_vw`.`customer` AS `customer`,`location_with_customer_vw`.`address` AS `address`,`machine`.`name` AS `machineName`,`machine`.`model` AS `machineModel`,`location_with_customer_vw`.`location` AS `location`,`location_with_customer_vw`.`serial_number` AS `serialNumber`,`location_with_customer_vw`.`counterBlack` AS `counterBlack`,`location_with_customer_vw`.`counterColor` AS `counterColor`,`location_with_customer_vw`.`contract` AS `contract` from (`location_with_customer_vw` join `machine` on((`location_with_customer_vw`.`machine_id` = `machine`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `location_with_customer_vw`
--

/*!50001 DROP VIEW IF EXISTS `location_with_customer_vw`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `location_with_customer_vw` AS select `location`.`id` AS `id`,`customer`.`name` AS `customer`,`customer`.`address` AS `address`,`location`.`machine_id` AS `machine_id`,`location`.`location_name` AS `location`,`location`.`serial_number` AS `serial_number`,`location`.`counter_BW` AS `counterBlack`,`location`.`counter_C` AS `counterColor`,`location`.`contract` AS `contract` from (`location` join `customer` on((`location`.`customer_id` = `customer`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-28 23:01:54
