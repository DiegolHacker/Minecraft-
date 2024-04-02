-- La suma de las cantidades e importe total de todas las entregas realizadas durante el 97. 

SELECT SUM(Cantidad) AS "Número de entregas", SUM(Cantidad * (M.precio + M.impuesto)) AS "Importe total"
FROM Entregan E
JOIN Materiales M on E.Clave = M.Clave
WHERE YEAR(Fecha) = 1997;

-- Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.  
SELECT P.RazonSocial AS "Razon Social",
COUNT(E.RFC) AS "Número de entregas", SUM(E.Cantidad * (M.Precio + M.Impuesto)) AS "Importe total"
FROM Proveedores P
JOIN Entregan E ON P.RFC = E.RFC
JOIN Materiales M ON E.Clave = M.Clave
GROUP BY P.RFC;

-- Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400. 

SELECT M.Descripcion, E.Clave, SUM(E.Cantidad) AS "Cantidad entregada", MIN(E.Cantidad) AS "Cantidad mínima", MAX(E.Cantidad) AS "Cantidad máxima", AVG(E.Cantidad) AS "Cantidad promedio",  
IF(AVG(E.Cantidad)>400, SUM(E.Cantidad * (M.Precio + M.Impuesto)), "") AS "Importe Total"
FROM Entregan E
JOIN Materiales M ON E.Clave = M.Clave
GROUP BY Clave, Descripcion;

-- Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.

SELECT P.razonsocial, M.Clave, M.Descripcion, AVG(E.Cantidad) AS "Cantidad promedio"
FROM Proveedores P
JOIN Entregan E ON E.RFC = P.RFC
JOIN Materiales M ON E.Clave = M.Clave
GROUP BY M.Clave, P.razonsocial
HAVING AVG(E.Cantidad) > 500;

-- Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450. 
SELECT P.razonsocial, M.Clave, M.Descripcion, AVG(E.Cantidad) AS "Cantidad promedio"
FROM Proveedores P
JOIN Entregan E ON E.RFC = P.RFC
JOIN Materiales M ON E.Clave = M.Clave
GROUP BY M.Clave, P.razonsocial
HAVING AVG(E.Cantidad) < 370 OR AVG(E.Cantidad) > 450;

-- Considerando que los valores de tipos CHAR y VARCHAR deben ir encerrados entre apóstrofes, los valores numéricos se escriben directamente y los de fecha, como '1-JAN-00' para 1o. de enero del 2000, inserta cinco nuevos materiales.