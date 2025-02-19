
### Ejercicio: ¿Cuántos paneles caben?

### Supuestos:
### - Se puede tener funciones globales, mientras la interacción sea solo a través de una función
### - Los bonus pueden ser funciones a parte

### Consideraciones:
### - Entrega las respuestas correctas pero tiene una gran complejidad el algoritmo por lo cual para casos más grandes se demora tiempo

def representacion_matrix(matrix: list[list[int]]) -> str:
    representacion = ""
    for fila in matrix:
        representacion += " ".join(map(str, fila)) + "\n"
    return representacion

def se_puede_ubicar(matrix: list[list[int]], inicio_x: int, inicio_y: int, a: int, b: int) -> bool:
    if inicio_x + a > len(matrix) or inicio_y + b > len(matrix[0]):
        return False
    for i in range(a):
        for j in range(b):
            if matrix[inicio_x + i][inicio_y + j] == 1:
                return False
    return True

def ubicar(matrix: list[list[int]], inicio_x: int, inicio_y: int, a: int, b: int) -> None:
    for i in range(a):
        for j in range(b):
            matrix[inicio_x + i][inicio_y + j] = 1

def desubicar(matrix: list[list[int]], inicio_x: int, inicio_y: int, a: int, b: int) -> None:
    for i in range(a):
        for j in range(b):
            matrix[inicio_x + i][inicio_y + j] = 0

### dimensiones paneles solares (a,b) y dimensiones del techo un rectangulo de lados (x,y)
def max_cantidad_paneles_solares(a:int, b:int, x:int, y:int, matrix: list[list] = None, max_paneles:int = 0) -> int:

    if (a > x and a > y) or (b > x and b > y):
        return 0
    
    if matrix is None:
        matrix = [[0 for _ in range(x)] for _ in range(y)]
    
    max_paneles_actual = max_paneles
    
    for coordenada_y in range(y):
        for coordenada_x in range(x):        
            if se_puede_ubicar(matrix, coordenada_y, coordenada_x, a, b):
                ubicar(matrix, coordenada_y, coordenada_x, a, b)
                max_paneles_actual = max(max_paneles_actual, max_cantidad_paneles_solares(a, b, x, y, matrix, max_paneles + 1))
                desubicar(matrix, coordenada_y, coordenada_x, a, b)
            
            if se_puede_ubicar(matrix, coordenada_y, coordenada_x, b, a):
                ubicar(matrix, coordenada_y, coordenada_x, b, a)
                max_paneles_actual = max(max_paneles_actual, max_cantidad_paneles_solares(a, b, x, y, matrix, max_paneles + 1))
                desubicar(matrix, coordenada_y, coordenada_x, b, a)

    return max_paneles_actual

def bloquear_orillas_triangulo(matrix: list[list[int]], x:int, h:int) -> None:
    for i in range(x//2):
        for j in range(h):
            proyeccion = (i/(x//2))*h
            if j > proyeccion:
                matrix[h-j-1][i] = 1
                matrix[h-j-1][x-1-i] = 1

### dimensiones paneles solares (a,b) y dimensiones del techo, un triangulo isoceles de base x y altura h
def max_paneles_triangulo(a:int, b:int, x:int, h:int) -> int:
    matrix = [[0 for _ in range(x)] for _ in range(h)]
    bloquear_orillas_triangulo(matrix, x, h)
    print(representacion_matrix(matrix))
    return max_cantidad_paneles_solares(a, b, x, h, matrix, 0)


if __name__ == "__main__":
    #print(f"Maxima cantidad de paneles de 1x2 en un techo de 2x4 es: {max_cantidad_paneles_solares(1, 2, 2, 4)}") 
    #print(f"Maxima cantidad de paneles de 1x2 en un techo de 3x5 es: {max_cantidad_paneles_solares(1, 2, 3, 5)}") 
    #print(f"Maxima cantidad de paneles de 2x2 en un techo de 1x10 es: {max_cantidad_paneles_solares(2, 2, 1, 10)}") 

    print(f"Maxima cantidad de paneles de 1x2 en un techo de ancho 5 y alto 3: {max_paneles_triangulo(1,2,5,3)}")
    print(f"Maxima cantidad de paneles de 1x2 en un techo de ancho 6 y alto 3: {max_paneles_triangulo(1,2,6,3)}")
    print(f"Maxima cantidad de paneles de 2x3 en un techo de ancho 7 y alto 4: {max_paneles_triangulo(2,3,7,4)}")