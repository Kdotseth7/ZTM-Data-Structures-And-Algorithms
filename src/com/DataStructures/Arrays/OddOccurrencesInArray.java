package com.DataStructures.Arrays;

import java.util.Hashtable;
import java.util.Set;

public class OddOccurrencesInArray {

    public static void main(String[] args) {
        int[] array = {9, 3, 9, 3, 9, 7, 9};
        int sol = solution(array);
        System.out.println(sol);
    }

    public static int solution(int[] A) {
        int sol = 0;
        Hashtable<Integer, Integer> hashtable = new Hashtable<Integer, Integer>();
        for (int i = 0; i<A.length; i++) {
            int counter = 1;
            for (int j=i+1; j<A.length; j++) {
                if (A[i] == A[j]) {
                    counter++;
                    System.out.println(A[i] + ":" + counter);
                    hashtable.put(A[i], counter);
                }
            }
        }
        Set<Integer> keys = hashtable.keySet();
        System.out.println(keys);
        System.out.println(hashtable);
        for (int key : keys) {
            Integer curKey = hashtable.get(key);
            if (curKey == 1)
                sol = key;
        }
        return sol;
    }
}
