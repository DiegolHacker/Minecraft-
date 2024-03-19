-- Los materiales (clave y descripción) entregados al proyecto "México sin ti no estamos completos". 
SELECT m.clave, m.descripcion
FROM materiales m, proyectos p, entregan e
WHERE m.clave = e.clave AND e.numero = p.numero AND p.denominacion = 'Mexico sin ti no estamos completos';

-- Los materiales (clave y descripción) que han sido proporcionados por el proveedor "Acme tools". 
SELECT m.clave, m.descripcion
FROM materiales m, proveedores p, entregan e
WHERE m.clave = e.clave AND e.rfc = p.rfc AND p.razonsocial = 'Acme tools';

-- El RFC de los proveedores que durante el 2000 entregaron en promedio cuando menos 300 materiales. 
SELECT e.rfc
FROM entregan e
WHERE year(e.fecha) = 2000
GROUP BY e.rfc
HAVING avg(cantidad) >= 300;

-- El Total entregado por cada material en el año 2000. 
SELECT clave,  sum(cantidad) AS Total_entregado
FROM entregan
WHERE year(fecha) = 2000
GROUP BY clave;

-- La Clave del material más vendido durante el 2001. (se recomienda usar una vista intermedia para su solución)  
SELECT clave
FROM( SELECT clave, MAX(Total_vendido) AS Total_vendido
FROM( SELECT clave, sum(cantidad) AS Total_vendido
FROM entregan 
WHERE YEAR(fecha) = 2001
GROUP BY clave 
ORDER BY Total_vendido DESC
) AS max) AS maxclave;

-- Productos que contienen el patrón 'ub' en su nombre. 
SELECT *
FROM materiales
WHERE descripcion LIKE '%ub%';

-- Denominación y suma del total a pagar para todos los proyectos.  
SELECT p.denominacion, sum(e.cantidad * (m.precio + m.impuesto)) AS Total_a_pagar
FROM materiales m, proyectos p, entregan e
WHERE e.clave = m.clave and p.numero = e.numero
GROUP BY p.denominacion;

-- Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando en Coahuila (Solo usando vistas). 
CREATE VIEW Televisa AS
SELECT DISTINCT e.rfc
FROM proyectos p, entregan e 
WHERE p.numero = e.numero
AND p.denominacion = 'Televisa en acción';

CREATE VIEW Coahuila AS
SELECT DISTINCT e.rfc
FROM proyectos p, entregan e
WHERE p.numero = e.numero 
AND p.denominacion = 'Educando en Coahuila';

SELECT p.rfc, p.razonsocial
FROM proveedores p, (
SELECT DISTINCT COALESCE(t.rfc, c.rfc) as rfc
FROM Televisa t
LEFT JOIN Coahuila c ON c.rfc = t.rfc
WHERE c.rfc IS NULL
UNION
SELECT DISTINCT COALESCE(t.rfc, c.rfc) as rfc
FROM Coahuila c
LEFT JOIN Televisa t ON c.rfc = t.rfc
WHERE t.rfc IS NULL
) as tabla
WHERE p.rfc = tabla.rfc;

-- Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando en Coahuila (Sin usar vistas, utiliza not in, in o exists). 
SELECT DISTINCT p.razonsocial, p.rfc
FROM proveedores p, proyectos pr, entregan e
WHERE p.rfc = e.rfc and pr.numero = e.numero and pr.denominacion = 'Televisa en acción'
AND p.rfc not in(
    SELECT e.rfc
	FROM proyectos pr, entregan e
	WHERE pr.numero = e.numero and pr.denominacion = 'Educando en Coahuila'
)
UNION
SELECT DISTINCT p.razonsocial, p.rfc
FROM proveedores p, proyectos pr, entregan e
WHERE p.rfc = e.rfc and pr.numero = e.numero and pr.denominacion = 'Educando en Coahuila'
AND p.rfc not in(
    SELECT e.rfc
	FROM proyectos pr, entregan e
	WHERE pr.numero = e.numero and pr.denominacion = 'Televisa en acción'
);


-- Costo de los materiales y los Materiales que son entregados al proyecto Televisa en acción cuyos proveedores también suministran materiales al proyecto Educando en Coahuila. 
SELECT m.descripcion, m.precio
FROM materiales m, entregan e
WHERE m.clave = e.clave
AND e.numero IN (
    SELECT e.numero
    FROM entregan e, proyectos p
    WHERE e.numero = p.numero AND p.denominacion = 'Televisa en acción'
)
And e.rfc IN (
    SELECT e.rfc
    FROM entregan e, proyectos pr
    WHERE e.numero = pr.numero AND pr.denominacion = 'Educando en Coahuila'
);

-- Nombre del material, cantidad de veces entregados y total del costo de dichas entregas por material de todos los proyectos.  
Select count(*) from(
SELECT m.descripcion, COUNT(e.clave) AS Entregas, SUM(e.cantidad * m.precio) AS Total_costo
FROM entregan e, materiales m
where e.clave = m.clave
GROUP BY m.descripcion) as caca