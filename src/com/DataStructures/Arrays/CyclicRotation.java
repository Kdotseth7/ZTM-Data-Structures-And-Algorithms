package com.DataStructures.Arrays;

import java.util.Arrays;

public class CyclicRotation {

    public static void main(String[] args) {
        int[] array = {3, 8, 9, 7, 6};
        int k = 3;
        int [] rotatedArray = solution(array, k);
        System.out.println(Arrays.toString(rotatedArray));
    }

    public static int[] solution(int[] A, int K) {
        int i = 0;
        while (i < K) {
            for (int j=0; j<A.length; j++) {
                int temp = A[A.length-1];
                
            }
        }
    }

}
