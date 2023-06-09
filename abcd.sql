toc.dat                                                                                             0000600 0004000 0002000 00000021503 14437620771 0014453 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP           '                {         	   fun_space    15.3    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                    0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                    0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                    1262    16406 	   fun_space    DATABASE     |   CREATE DATABASE fun_space WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE fun_space;
                postgres    false         �            1259    16429    comments    TABLE       CREATE TABLE public.comments (
    comment_id integer NOT NULL,
    comment_des text NOT NULL,
    comment_threadfor integer,
    comment_likedby integer[] DEFAULT ARRAY[]::integer[],
    comment_dislikedby integer[] DEFAULT ARRAY[]::integer[],
    comment_author integer
);
    DROP TABLE public.comments;
       public         heap    postgres    false         �            1259    16428    comments_comment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comments_comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.comments_comment_id_seq;
       public          postgres    false    219                    0    0    comments_comment_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.comments_comment_id_seq OWNED BY public.comments.comment_id;
          public          postgres    false    218         �            1259    16415    threads    TABLE     �  CREATE TABLE public.threads (
    thread_id integer NOT NULL,
    thread_title text NOT NULL,
    thread_description text NOT NULL,
    thread_tags text[] DEFAULT ARRAY[]::text[],
    thread_likedby integer[] DEFAULT ARRAY[]::integer[],
    thread_dislikedby integer[] DEFAULT ARRAY[]::integer[],
    thread_author integer,
    thread_createdon timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public.threads;
       public         heap    postgres    false         �            1259    16414    threads_thread_id_seq    SEQUENCE     �   CREATE SEQUENCE public.threads_thread_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.threads_thread_id_seq;
       public          postgres    false    217                     0    0    threads_thread_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.threads_thread_id_seq OWNED BY public.threads.thread_id;
          public          postgres    false    216         �            1259    16408    users    TABLE     w   CREATE TABLE public.users (
    user_id integer NOT NULL,
    user_name text NOT NULL,
    user_email text NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false         �            1259    16407    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    215         !           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    214         u           2604    16432    comments comment_id    DEFAULT     z   ALTER TABLE ONLY public.comments ALTER COLUMN comment_id SET DEFAULT nextval('public.comments_comment_id_seq'::regclass);
 B   ALTER TABLE public.comments ALTER COLUMN comment_id DROP DEFAULT;
       public          postgres    false    219    218    219         p           2604    16418    threads thread_id    DEFAULT     v   ALTER TABLE ONLY public.threads ALTER COLUMN thread_id SET DEFAULT nextval('public.threads_thread_id_seq'::regclass);
 @   ALTER TABLE public.threads ALTER COLUMN thread_id DROP DEFAULT;
       public          postgres    false    217    216    217         o           2604    16411    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    214    215    215                   0    16429    comments 
   TABLE DATA           �   COPY public.comments (comment_id, comment_des, comment_threadfor, comment_likedby, comment_dislikedby, comment_author) FROM stdin;
    public          postgres    false    219       3352.dat           0    16415    threads 
   TABLE DATA           �   COPY public.threads (thread_id, thread_title, thread_description, thread_tags, thread_likedby, thread_dislikedby, thread_author, thread_createdon) FROM stdin;
    public          postgres    false    217       3350.dat           0    16408    users 
   TABLE DATA           ?   COPY public.users (user_id, user_name, user_email) FROM stdin;
    public          postgres    false    215       3348.dat "           0    0    comments_comment_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.comments_comment_id_seq', 34, true);
          public          postgres    false    218         #           0    0    threads_thread_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.threads_thread_id_seq', 38, true);
          public          postgres    false    216         $           0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 15, true);
          public          postgres    false    214         �           2606    16436    comments comments_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (comment_id);
 @   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_pkey;
       public            postgres    false    219         }           2606    16422    threads threads_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.threads
    ADD CONSTRAINT threads_pkey PRIMARY KEY (thread_id);
 >   ALTER TABLE ONLY public.threads DROP CONSTRAINT threads_pkey;
       public            postgres    false    217                    2606    16474    threads unique_thread_title 
   CONSTRAINT     ^   ALTER TABLE ONLY public.threads
    ADD CONSTRAINT unique_thread_title UNIQUE (thread_title);
 E   ALTER TABLE ONLY public.threads DROP CONSTRAINT unique_thread_title;
       public            postgres    false    217         y           2606    16476    users unique_user_email 
   CONSTRAINT     X   ALTER TABLE ONLY public.users
    ADD CONSTRAINT unique_user_email UNIQUE (user_email);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT unique_user_email;
       public            postgres    false    215         {           2606    16413    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215         �           2606    16458 %   comments comments_comment_author_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_comment_author_fkey FOREIGN KEY (comment_author) REFERENCES public.users(user_id) ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_comment_author_fkey;
       public          postgres    false    215    3195    219         �           2606    16463 %   comments comments_comment_thread_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_comment_thread_fkey FOREIGN KEY (comment_threadfor) REFERENCES public.threads(thread_id) ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_comment_thread_fkey;
       public          postgres    false    217    3197    219         �           2606    16453 "   threads threads_thread_author_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.threads
    ADD CONSTRAINT threads_thread_author_fkey FOREIGN KEY (thread_author) REFERENCES public.users(user_id) ON DELETE CASCADE;
 L   ALTER TABLE ONLY public.threads DROP CONSTRAINT threads_thread_author_fkey;
       public          postgres    false    217    215    3195                                                                                                                                                                                                     3352.dat                                                                                            0000600 0004000 0002000 00000001113 14437620771 0014255 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        29	Ae Dibbe	7	{}	{}	15
34	The thing is that whenever a useFetch is used in a file it creates it's own instance. The one in navbar will get the values for it's own instance. Calling getAllThreads in Navbar.js will have it's allThreads value set for the instance in Navbar.js only. If you want to use the same value across files use the state in a parent component and pass it as a prop.	32	{}	{}	15
30	One of the best movies of matt damon	15	{15}	{}	15
15	Hehhhhhh!!	7	{4,15}	{}	4
20	Ha sachi vaat filmy!!	7	{}	{}	10
24	Nahane Jaa Nahane Jaa	7	{}	{}	15
26	Ae Bhindi Chupp	7	{}	{}	15
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                     3350.dat                                                                                            0000600 0004000 0002000 00000002405 14437620771 0014260 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        7	Chal Chal Ave	Jethalal is the best, Iyer is waste	{Tapu,Sonu}	{1,3,4}	{15}	1	2023-06-06 15:44:07.713398+05:30
32	Sharing the states using a common hook in different components	So I have made a custom hook named as useFetch. It consists of a state designated as allThreads. allThreads is used and set in a function inside useFetch called as getAllThreads. When I call the getAllThreads in Navbar.js the state value is set and is displayed in Navbar.js. But if I want to use the same value already set by calling getAllThreads in Navbar.js in a file called View.js I can't get the value. 	{react,hooks,fun-space,challenge,"interview question"}	{}	{}	15	2023-06-06 15:44:07.713398+05:30
15	AIR	The movie which signs michael jordan for nike.	{Nike}	{15}	{}	15	2023-06-06 15:44:07.713398+05:30
34	jabba	jabba	{}	{}	{}	\N	2023-06-06 15:44:07.713398+05:30
35	Abba Dabba Jabba	Mast hai re baba	{raju}	{}	{}	15	2023-06-06 15:44:07.713398+05:30
13	Taste of Vadodara	had great fun and great pictures	{concert,food}	{}	{}	10	2023-06-06 15:44:07.713398+05:30
22	Kingsman - The Secret Service	Manners maketh the man	{egsy,"harry hart"}	{}	{}	15	2023-06-06 15:44:07.713398+05:30
23	Coach Carter	Our depest fear is not the darkness its the light	{sir}	{}	{}	15	2023-06-06 15:44:07.713398+05:30
\.


                                                                                                                                                                                                                                                           3348.dat                                                                                            0000600 0004000 0002000 00000000162 14437620771 0014265 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	DHYEY	hulk@gmail.com
4	KHUBI	mitthu@gmail.com
10	HAIKU	teddu@gmail.com
15	Dhyey Shah	dhyey.7shah@gmail.com
\.


                                                                                                                                                                                                                                                                                                                                                                                                              restore.sql                                                                                         0000600 0004000 0002000 00000017027 14437620771 0015406 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

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

DROP DATABASE fun_space;
--
-- Name: fun_space; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE fun_space WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';


ALTER DATABASE fun_space OWNER TO postgres;

\connect fun_space

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
-- Name: comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comments (
    comment_id integer NOT NULL,
    comment_des text NOT NULL,
    comment_threadfor integer,
    comment_likedby integer[] DEFAULT ARRAY[]::integer[],
    comment_dislikedby integer[] DEFAULT ARRAY[]::integer[],
    comment_author integer
);


ALTER TABLE public.comments OWNER TO postgres;

--
-- Name: comments_comment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comments_comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comments_comment_id_seq OWNER TO postgres;

--
-- Name: comments_comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comments_comment_id_seq OWNED BY public.comments.comment_id;


--
-- Name: threads; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.threads (
    thread_id integer NOT NULL,
    thread_title text NOT NULL,
    thread_description text NOT NULL,
    thread_tags text[] DEFAULT ARRAY[]::text[],
    thread_likedby integer[] DEFAULT ARRAY[]::integer[],
    thread_dislikedby integer[] DEFAULT ARRAY[]::integer[],
    thread_author integer,
    thread_createdon timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.threads OWNER TO postgres;

--
-- Name: threads_thread_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.threads_thread_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.threads_thread_id_seq OWNER TO postgres;

--
-- Name: threads_thread_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.threads_thread_id_seq OWNED BY public.threads.thread_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    user_name text NOT NULL,
    user_email text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: comments comment_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments ALTER COLUMN comment_id SET DEFAULT nextval('public.comments_comment_id_seq'::regclass);


--
-- Name: threads thread_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.threads ALTER COLUMN thread_id SET DEFAULT nextval('public.threads_thread_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comments (comment_id, comment_des, comment_threadfor, comment_likedby, comment_dislikedby, comment_author) FROM stdin;
\.
COPY public.comments (comment_id, comment_des, comment_threadfor, comment_likedby, comment_dislikedby, comment_author) FROM '$$PATH$$/3352.dat';

--
-- Data for Name: threads; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.threads (thread_id, thread_title, thread_description, thread_tags, thread_likedby, thread_dislikedby, thread_author, thread_createdon) FROM stdin;
\.
COPY public.threads (thread_id, thread_title, thread_description, thread_tags, thread_likedby, thread_dislikedby, thread_author, thread_createdon) FROM '$$PATH$$/3350.dat';

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, user_name, user_email) FROM stdin;
\.
COPY public.users (user_id, user_name, user_email) FROM '$$PATH$$/3348.dat';

--
-- Name: comments_comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comments_comment_id_seq', 34, true);


--
-- Name: threads_thread_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.threads_thread_id_seq', 38, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_user_id_seq', 15, true);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (comment_id);


--
-- Name: threads threads_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.threads
    ADD CONSTRAINT threads_pkey PRIMARY KEY (thread_id);


--
-- Name: threads unique_thread_title; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.threads
    ADD CONSTRAINT unique_thread_title UNIQUE (thread_title);


--
-- Name: users unique_user_email; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT unique_user_email UNIQUE (user_email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: comments comments_comment_author_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_comment_author_fkey FOREIGN KEY (comment_author) REFERENCES public.users(user_id) ON DELETE CASCADE;


--
-- Name: comments comments_comment_thread_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_comment_thread_fkey FOREIGN KEY (comment_threadfor) REFERENCES public.threads(thread_id) ON DELETE CASCADE;


--
-- Name: threads threads_thread_author_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.threads
    ADD CONSTRAINT threads_thread_author_fkey FOREIGN KEY (thread_author) REFERENCES public.users(user_id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         