import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
  Button,
  Alert,
} from "@mui/material";
import { AlertTitle } from "@mui/lab";
import { Info, Error } from "@mui/icons-material";
import BaseCard from "../baseCard/BaseCard";

const products = [
  {
    id: "1",
    name: "Sunil Joshi",
    email: "suniljoshi@example.com",
  },
  {
    id: "2",
    name: "John Doe",
    email: "johndoe@example.com",
  }
];

const ProductPerformance = () => {
  const [loading, setLoading] = useState(true);
  const [showNoElements, setShowNoElements] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    // Simulación de carga de datos (5 segundos)
    setTimeout(() => {
      setLoading(false);
      if (products.length === 0) {
        setShowNoElements(true);
      } else {
        setShowNoElements(false);
      }
    }, 5000);
  }, []);

  const handleAddProduct = () => {
    // Lógica para agregar un nuevo producto
    console.log("Agregar nuevo producto");
  };

  const handleReload = () => {
    setLoading(true);
    setShowError(false);
    setTimeout(() => {
      setLoading(false);
      if (products.length === 0) {
        setShowNoElements(true);
      } else {
        setShowNoElements(false);
      }
    }, 2000);
  };

  return (
    <BaseCard title="Product Performance">
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          p={4}
          textAlign="center"
        >
          <CircularProgress />
          <Typography variant="h5" color="textSecondary" mt={2}>
            Cargando elementos...
          </Typography>
        </Box>
      ) : showError ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          p={4}
          textAlign="center"
        >
          <Alert severity="error" icon={<Error fontSize="large" />}>
            <AlertTitle>Error al cargar elementos</AlertTitle>
            No se pudieron cargar los elementos. Intenta nuevamente.
          </Alert>
          <Button variant="contained" color="primary" onClick={handleReload} mt={2}>
            Cargar nuevamente
          </Button>
        </Box>
      ) : showNoElements ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          p={4}
          textAlign="center"
        >
          <Alert severity="info" icon={<Info fontSize="large" />}>
            <AlertTitle>No hay elementos disponibles</AlertTitle>
            Agrega nuevos productos para visualizar el rendimiento.
          </Alert>
          <Button variant="contained" color="primary" onClick={handleAddProduct} mt={2}>
            Agregar producto
          </Button>
        </Box>
      ) : (
        <Table aria-label="simple table" sx={{ mt: 3, whiteSpace: "nowrap" }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Email
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell>
                  <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                    {product.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.email}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </BaseCard>
  );
};

export default ProductPerformance;
