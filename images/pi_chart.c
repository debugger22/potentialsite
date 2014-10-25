#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <GL/glut.h>
#include <math.h>

float x[20];
int num;
float sum=0;
float PI=3.142;
float angle=0;
float vx = 20.0, vy = 10.0;
void myInit(void)
{
    glClearColor(1.0,1.0,1.0,0.0);
    glColor3f(1.0f,0.4f,0.7f);
    glPointSize(4.0);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0.0,20.0,0.0,20.0);
}


void myDisplay(void)
{
    glClear(GL_COLOR_BUFFER_BIT);
    int i, j;
    for (i=0; i<20; i++){
        glColor3f(0.0, 0.0, 0.0);
        glBegin(GL_LINES);
            glVertex2f(0, i);
            glVertex2f(20, i);
        glEnd();
        glutSwapBuffers();
    }
    for (j=0; j<20; j++){
        glColor3f(0.0, 0.0, 0.0);
        glBegin(GL_LINES);
            glVertex2f(j, 0);
            glVertex2f(j, 20);
        glEnd();
        glutSwapBuffers();
    }
    int k;
    //float prev_x=20;
    //float prev_y=10;
    for (k=0; k<num; k++){
    glBegin(GL_POLYGON);
    angle+=360*(x[k]/sum);
    float cos_val=cos(angle*(PI/180));
    float sin_val=sin(angle*(PI/180));
    
        if(k%3==0)
		glColor3d(0 ,0 ,1);
	if(k%3==1)
		glColor3d(0 ,1 ,0);
	if(k%3==2)
		glColor3d(1 ,0 ,0);
        glVertex2f(vx, vy);
        glVertex2f(10, 10);
        glVertex2f(10*cos_val+10, 10*sin_val+10);
        
    glEnd();
    glutSwapBuffers();
    printf("%f cos \n", cos_val);
    printf("%f sin\n", sin_val);
    vx=10*cos_val+10;
    vy=10*sin_val+10;
}
}

int main(int argc,char * argv[])
{
    printf("Enter the number of values\n");
    scanf("%d", &num);
    printf("Enter the values\n");
    int i;
    for (i=0; i<num; i++){
        scanf("%f", &x[i]);
        sum+=x[i];
    }
    glutInit(&argc,argv);
    glutInitDisplayMode(GLUT_SINGLE|GLUT_RGB);
    glutInitWindowSize(600,600);
    glutInitWindowPosition(100,100);
    glutCreateWindow("Draw Pi Chart");
    glutDisplayFunc(myDisplay);
    myInit();
    glutMainLoop();
    return 0;
}
