SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE usename = 'freecodecamp';

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Debian 12.6-1.pgdg90+1)
-- Dumped by pg_dump version 12.6 (Debian 12.6-1.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE IF EXISTS bikes;
--
-- Name: bikes; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE bikes WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE bikes OWNER TO freecodecamp;

\connect bikes

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bikes; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.bikes (
    bike_id integer NOT NULL,
    type character varying(50) NOT NULL
);


ALTER TABLE public.bikes OWNER TO freecodecamp;

--
-- Name: bikes_bike_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.bikes_bike_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bikes_bike_id_seq OWNER TO freecodecamp;

--
-- Name: bikes_bike_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.bikes_bike_id_seq OWNED BY public.bikes.bike_id;


--
-- Name: bikes bike_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.bikes ALTER COLUMN bike_id SET DEFAULT nextval('public.bikes_bike_id_seq'::regclass);


--
-- Data for Name: bikes; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--



--
-- Name: bikes_bike_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.bikes_bike_id_seq', 1, false);


--
-- Name: bikes bikes_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.bikes
    ADD CONSTRAINT bikes_pkey PRIMARY KEY (bike_id);


--
-- PostgreSQL database dump complete
--

