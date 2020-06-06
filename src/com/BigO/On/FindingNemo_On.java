package com.BigO.On;

public class FindingNemo_On {

    public static void main(String[] args) {
        String[] nemo = {"nemo"};
        String[] everyone = {"dory","bruce", "marlin",
                "nemo", "gill", "bloat", "nigel", "squirt",
                "darla", "hank"};
        findingNemo(nemo);
        findingNemo(everyone); //O(n) --> Linear Time

    }

    public static void findingNemo(String[] array) {
        long startTime = System.nanoTime();
        for (int i=0; i<array.length; i++) {
            System.out.println("RUN");
            if (array[i].equals("nemo")) {
                System.out.println("Found Nemo " + "at position:" + i);
                break;
            }
        }
        long endTime = System.nanoTime();
        System.out.println("Call to find Nemo took:" + (endTime - startTime) + " ms");
    }
}
